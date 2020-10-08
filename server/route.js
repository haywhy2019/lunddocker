module.exports = (app) => {


app.get("/", (req, res) => {

   console.log("working") 
         res.render("home");
      
   });

}