const express=require('express');
const Router=express.Router();

// MySQL
const pool =require('../config/config');
    Router.post('', async(req, res) => {
        pool.getConnection((err, connection) => {
            if(err) throw err
            // console.log('connected as id ' + connection.threadId)
            const Seat_type=req.body.Seat_type;
            const Jee_mains_rank=req.body.Jee_mains_rank;
            const Jee_advanced_rank=req.body.Jee_advanced_rank;
            const Limit=req.body.Limit;
            const Offset=req.body.Offset;
            
                // res.json(user[0].user_count)
                    var sql=`SELECT * from josaa where (Seat_Type="${Seat_type}" AND Institute LIKE "%National%" AND Opening_Rank>=${Jee_mains_rank} AND ${Jee_mains_rank}<=Closing_Rank) OR (Seat_Type="${Seat_type}" AND Institute LIKE "%Indian%" AND Opening_Rank>=${Jee_advanced_rank} AND ${Jee_advanced_rank}<=Closing_Rank) LIMIT ${Limit} OFFSET ${Offset} `
                    connection.query(sql, (err, rows) => {
                        connection.release() // return the connection to pool
                        if (!err) {
                            const result=rows
                            res.json(result)
                        } else {
                            res.status(400).send(err)
                            console.log(err)
                        }
                        // console.log('The data from beer table are: \n', rows)
                    })
            
        })
    })

module.exports=Router;