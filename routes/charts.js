const { response } = require('express');
const express = require('express');
const router = express.Router();
const Charts = require('../models/Charts');
const Murder = require('../models/Murder');

router.get('/', async (request, response) => {
    try{

        Meses = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',]
        Hmes = [];



        for (const mes of Meses) {
            const count = await Murder.countDocuments({ BO_EMITIDO: { $regex:  '^([0-2][0-9]|(3)[0-1])(\/)'+ mes +'(\/)(2019)' }});
            console.log(count);
            Hmes.push(count);
        }

            // Hmes[0] = await Murder.countDocuments({ BO_EMITIDO: { $regex:  '^([0-2][0-9]|(3)[0-1])(\/)(01)(\/)(2019)' }});
            // Hmes[1] = await Murder.countDocuments({ BO_EMITIDO: { $regex:  '^([0-2][0-9]|(3)[0-1])(\/)(02)(\/)(2019)' }});  
            // Hmes[2] = await Murder.countDocuments({ BO_EMITIDO: { $regex:  '^([0-2][0-9]|(3)[0-1])(\/)(03)(\/)(2019)' }});
            // Hmes[3] = await Murder.countDocuments({ BO_EMITIDO: { $regex:  '^([0-2][0-9]|(3)[0-1])(\/)(04)(\/)(2019)' }});
            // Hmes[4] = await Murder.countDocuments({ BO_EMITIDO: { $regex:  '^([0-2][0-9]|(3)[0-1])(\/)(05)(\/)(2019)' }});
            // Hmes[5] = await Murder.countDocuments({ BO_EMITIDO: { $regex:  '^([0-2][0-9]|(3)[0-1])(\/)(06)(\/)(2019)' }});
            // Hmes[6] = await Murder.countDocuments({ BO_EMITIDO: { $regex:  '^([0-2][0-9]|(3)[0-1])(\/)(07)(\/)(2019)' }});
            // Hmes[7] = await Murder.countDocuments({ BO_EMITIDO: { $regex:  '^([0-2][0-9]|(3)[0-1])(\/)(08)(\/)(2019)' }});
            // Hmes[8] = await Murder.countDocuments({ BO_EMITIDO: { $regex:  '^([0-2][0-9]|(3)[0-1])(\/)(09)(\/)(2019)' }});
            // Hmes[9] = await Murder.countDocuments({ BO_EMITIDO: { $regex:  '^([0-2][0-9]|(3)[0-1])(\/)(10)(\/)(2019)' }});
            // Hmes[10] = await Murder.countDocuments({ BO_EMITIDO: { $regex:  '^([0-2][0-9]|(3)[0-1])(\/)(11)(\/)(2019)' }});
            // Hmes[11] = await Murder.countDocuments({ BO_EMITIDO: { $regex:  '^([0-2][0-9]|(3)[0-1])(\/)(12)(\/)(2019)' }});
            

        response.send(Hmes);
    } catch (err) {
        response.send({ message : err });
    }
});


// ===============================================================================================================================================

router.get('/countCor2019', async (request, response) => {

    try{
        var Array = ["Parda", "Branca", "Amarela", "Preta", "Outros", "Null"];
        
        var Corcutis = [];
        var x = 0;

        for (const cor of Array) {
            const count = await Murder.countDocuments({ BO_EMITIDO: { $regex:  '^([0-2][0-9]|(3)[0-1])(\/)((0)[1-9]|(1)[0-2])(\/)(2019)' }, CORCUTIS: cor});
            console.log(count);
            Corcutis.push(count);
        }

        // Corcutis[0] = await Murder.countDocuments({ANO_BO: "2019", CORCUTIS: Array[0]});
        // Corcutis[1] = await Murder.countDocuments({ANO_BO: "2019", CORCUTIS: Array[1]});
        // Corcutis[2] = await Murder.countDocuments({ANO_BO: "2019", CORCUTIS: Array[2]});
        // Corcutis[3] = await Murder.countDocuments({ANO_BO: "2019", CORCUTIS: Array[3]});
        // Corcutis[4] = await Murder.countDocuments({ANO_BO: "2019", CORCUTIS: Array[4]});
        // Corcutis[5] = await Murder.countDocuments({ANO_BO: "2019", CORCUTIS: Array[5]});

        response.send(Corcutis);
    } catch (err) { 
        response.send({ message : err });
    }
});

router.get('/countCor2018', async (request, response) => {
     
    try{
        var Array = ["Parda", "Branca", "Amarela", "Preta", "Outros", "Null"];
        
        var Corcutis = [];
        var x = 0;

        for (const cor of Array) {
            const count = await Murder.countDocuments({ BO_EMITIDO: { $regex:  '^([0-2][0-9]|(3)[0-1])(\/)((0)[1-9]|(1)[0-2])(\/)(2018)' }, CORCUTIS: cor});
            console.log(count);
            Corcutis.push(count);
        }

        // Corcutis[0] = await Murder.countDocuments({ANO_BO: "2018", CORCUTIS: Array[0]});       
        // Corcutis[1] = await Murder.countDocuments({ANO_BO: "2018", CORCUTIS: Array[1]});
        // Corcutis[2] = await Murder.countDocuments({ANO_BO: "2018", CORCUTIS: Array[2]});
        // Corcutis[3] = await Murder.countDocuments({ANO_BO: "2018", CORCUTIS: Array[3]});
        // Corcutis[4] = await Murder.countDocuments({ANO_BO: "2018", CORCUTIS: Array[4]});
        // Corcutis[5] = await Murder.countDocuments({ANO_BO: "2018", CORCUTIS: Array[5]});

        response.send(Corcutis);
    } catch (err) { 
        response.send({ message : err });
    }
});

router.get('/countCor2017', async (request, response) => {
     
    try{
        var Array = ["Parda", "Branca", "Amarela", "Preta", "Outros", "Null"];
        
        var Corcutis = [];
        var x = 0;

        
        for (const cor of Array) {
            const count = await Murder.countDocuments({ BO_EMITIDO: { $regex:  '^([0-2][0-9]|(3)[0-1])(\/)((0)[1-9]|(1)[0-2])(\/)(2017)' }, CORCUTIS: cor});
            console.log(count);
            Corcutis.push(count);
        }

        // Corcutis[0] = await Murder.countDocuments({ANO_BO: "2017", CORCUTIS: Array[0]});       
        // Corcutis[1] = await Murder.countDocuments({ANO_BO: "2017", CORCUTIS: Array[1]});
        // Corcutis[2] = await Murder.countDocuments({ANO_BO: "2017", CORCUTIS: Array[2]});
        // Corcutis[3] = await Murder.countDocuments({ANO_BO: "2017", CORCUTIS: Array[3]});
        // Corcutis[4] = await Murder.countDocuments({ANO_BO: "2017", CORCUTIS: Array[4]});
        // Corcutis[5] = await Murder.countDocuments({ANO_BO: "2017", CORCUTIS: Array[5]});

        response.send(Corcutis);
    } catch (err) { 
        response.send({ message : err });
    }
});

// =====================================================================================================================

router.get('/countSexo2019', async (request, response) => {
       
    try{

        var Sexos = ["Feminino", "Masculino", "Null"];
        var HSexo = [];

        
        for (const sex of Sexos) {
            const count = await Murder.countDocuments({ BO_EMITIDO: { $regex:  '^([0-2][0-9]|(3)[0-1])(\/)((0)[1-9]|(1)[0-2])(\/)(2019)' }, SEXO: sex});
            console.log(count);
            HSexo.push(count);
        }
        
        
        response.send(HSexo);
    } catch (err) {
        response.send({ message : err });
    }
});

router.get('/countSexo2018', async (request, response) => {
       
    try{

        var Sexos = ["Feminino", "Masculino", "Null"];
        var HSexo = [];

        
        for (const sex of Sexos) {
            const count = await Murder.countDocuments({ BO_EMITIDO: { $regex:  '^([0-2][0-9]|(3)[0-1])(\/)((0)[1-9]|(1)[0-2])(\/)(2018)' }, SEXO: sex});
            console.log(count);
            HSexo.push(count);
        }
        
        
        response.send(HSexo);
    } catch (err) {
        response.send({ message : err });
    }
});

router.get('/countSexo2017', async (request, response) => {
       
    try{

        var Sexos = ["Feminino", "Masculino", "Null"];
        var HSexo = [];

        
        for (const sex of Sexos) {
            const count = await Murder.countDocuments({ BO_EMITIDO: { $regex:  '^([0-2][0-9]|(3)[0-1])(\/)((0)[1-9]|(1)[0-2])(\/)(2017)' }, SEXO: sex});
            console.log(count);
            HSexo.push(count);
        }
        
        
        response.send(HSexo);
    } catch (err) {
        response.send({ message : err });
    }
});


module.exports = router;