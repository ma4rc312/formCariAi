import axios from "axios"

export default function useQserv(){
        const postQserv=async(data)=>{
             try{
                let res= await axios.post('/api/qserv.php/13465-770721',{...data})
                return res
             }catch(err){
                return err
             }
        }

        return {postQserv}
}