import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const hostName = "https://api.adviceslip.com/advice";

app.use(express.static("public"));


app.get("/", async (req, res) => {
    try {
        const result = await axios.get(hostName);
        console.log(result.data.slip.advice)
        res.render("index.ejs", { 
              advice: result.data.slip.advice,
      });
      } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("index.ejs", {
          error: error.message,
        });
      }
});


app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});