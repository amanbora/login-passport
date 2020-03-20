const router = express.Router();

router.get('/', (req,res,next)=>{
       res.render('index');
});