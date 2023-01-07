import axios from 'axios';


async function fetchFoByDis(setIsLoading, setFoList, dis) {
    try{
        const headers = { "authToken": localStorage.getItem('token') };
        let folist = await axios.get(`http://localhost:4000/users/user-profile`);
        setFoList(folist.data);
        console.log(folist.data);
        setIsLoading(false);
        }
        catch (e) {
            alert(e);
            setIsLoading(false);
        }
}
export default fetchFoByDis;
