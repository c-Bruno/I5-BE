const express = require('express');
const router = express.Router();
const Charts = require('../models/Charts');
const Murder = require('../models/Murder');

router.get('/', async (request, response) => {
    try{
        const getCharts = await Murder.find({ANO_BO: "2018"});
        response.json(getCharts);
    } catch (err) {
        response.json({ message : err });
    }
});

router.get('/countMes', async (request, response) => {
    // BO_EMITIDO: { $gte: new Date(2019, 1, 1), $lte: new Date(2019, 1, 30) }
    // const count = await Murder.countDocuments({ANO_BO: "2019", CORCUTIS: "Parda"});

    // { cor : 'Amarela' },
    //   { cor : 'Branca' },
    //   { cor : 'Parda' },
    //   { cor : 'Preta' },
    //   { cor : 'Outros' },
    //   { cor : 'Não definida' },

    
    
    try{
        var Array = ["Parda", "Branca", "Preta", "Outros", "Não definida"];
        var Meses = [];
        
        Array.forEach(async cor => {
            const count = await Murder.countDocuments({ANO_BO: "2019", CORCUTIS: cor});
            Meses.push(count);
        });

        response.json(Meses);
    } catch (err) {
        response.json({ message : err });
    }
});

module.exports = router;