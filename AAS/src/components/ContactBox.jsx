import { Button, TextField } from "@mui/material";
import { motion } from "framer-motion";

export default function ContactBox() {
  return (
    <motion.div
      id="contact"
      className=" py-16 px-4 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-3xl font-semibold text-center mb-8 ">Contact Us</h2>
      <form className="max-w-xl mx-auto space-y-4">
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          multiline
          rows={1}
          InputLabelProps={{ style: { color: "#fff" } }}
          sx={{
            "& .MuiOutlinedInput-root": {
              color: "#fff",
              margin: "5px 0px",
              "& fieldset": { borderColor: "white" },
              "&:hover fieldset": { borderColor: "#f472b6" },
              "&.Mui-focused fieldset": { borderColor: "#f472b6" },
            },
            "& .MuiInputLabel-root": { color: "#fff" },
          }}
        />

        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          multiline
          rows={1}
          InputLabelProps={{ style: { color: "#fff" } }}
          sx={{
            "& .MuiOutlinedInput-root": {
              color: "#fff",
              margin: "5px 0px",
              "& fieldset": { borderColor: "white" },
              "&:hover fieldset": { borderColor: "#f472b6" },
              "&.Mui-focused fieldset": { borderColor: "#f472b6" },
            },
            "& .MuiInputLabel-root": { color: "#fff" },
          }}
        />

        <TextField
          fullWidth
          label="Message"
          variant="outlined"
          multiline
          rows={3}
          InputLabelProps={{ style: { color: "#fff" } }}
          sx={{
            "& .MuiOutlinedInput-root": {
              color: "#fff",
              margin: "5px 0px",
              "& fieldset": { borderColor: "white" },
              "&:hover fieldset": { borderColor: "#f472b6" },
              "&.Mui-focused fieldset": { borderColor: "#f472b6" },
            },
            "& .MuiInputLabel-root": { color: "#fff" },
          }}
        />

        <Button
          variant="contained"
          className="bg-pink-600 hover:bg-pink-700 w-full"
        >
          Send
        </Button>
      </form>
    </motion.div>
  );
}
