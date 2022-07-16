import Link from "../models/link";
  
  // Get All Public Posts
export async function submitLink(req, res) {
   // { value: 'https://zoom.us/j/123456789' }
   const link = await Link.find({})
   try {
    if(link[0]){
            link[0].link = req.body.value;
            link[0].save();
            res.json(link[0]);
    } else {
            let newlink = new Link();
            newlink.link = req.body.value; 
            newlink.save();
            res.json(newlink);
    }
   } catch (err) {
    console.log(err);
    res.json(err);
   }
  }

  export async function getLink(req, res) {
    const link = await Link.find({})
    try {
      res.json(link[0]);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  }