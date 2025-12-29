import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { addFeedbackData } from "../../redux/FeedbackSection/FeedbackSectionActions";
import axios from "axios";
import { useAuth } from "../../AuthContext/AuthContext";


const selectSx = {
   "& .MuiInputBase-input": { 
    color: "#ffffff", 
  },
  input: { color: "#9CA3AF" },
  label: { color: "#93C5FD" },

  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "#ffffff" },
    "&:hover fieldset": { borderColor: "#34D399" },
    "&.Mui-focused fieldset": { borderColor: "#1E40AF" },
  },
  "& .MuiFormHelperText-root": { color: "#F87171" },
  "& .MuiInputLabel-root.MuiInputLabel-shrink": { color: "#34D399", fontWeight: 400 },
};
const glassBgSx = {
           maxWidth:700,
        p: 5,
        textAlign:"center",
        borderRadius: 2,
        boxShadow: 3,
  background: 'linear-gradient(to right, rgba(17, 24, 39, 0.1), rgba(31, 41, 55, 0.1))',
  backdropFilter: 'blur(24px)',
  WebkitBackdropFilter: 'blur(24px)',
};


import {
  Box,
  Button,
  TextField,
  Select,
  MenuItem,
  Typography,
  Stack,
  FormHelperText,
  FormControl,
  InputLabel
} from "@mui/material";

const FeedbackForm = () => {
  const dispatch = useDispatch();
  const { control, handleSubmit,setValue, reset } = useForm({
    defaultValues: {
      name: "",
      commentType: "",
      comment: "",
    },
  });

  const [imageBase64, setImageBase64] = useState("");
    const [file,setFile]=useState('');
    const [status,setStatus]=useState('idle');
    const [uploadProgress,setUploadProgress]=useState(0); 


  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFile(e.target.files[0]);
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImageBase64(reader.result);
    };
    reader.readAsDataURL(file);
  };

const [userData,setUserData]=useState(true);
const {user}=useAuth();
if(userData && user){
setValue("name",user.fullname);
setValue("email",user.email);
setValue("phone",user.phoneNumber);

setUserData(false);
}



  const onSubmit = async(data) => {
    dispatch(
      addFeedbackData({
        id: Date.now(),
        ...data,
        image: imageBase64,
      })
    );

    reset();
    console.log(data);
    setImageBase64("");


    setStatus('uploading');
    setUploadProgress(0);
    const formData=new FormData();
    formData.append('file',file);
    try{
   await axios.post('https://httpbin.org/post',formData,{
         headers:{
   'Content-Type':'multipart/form-data'
    },
    onUploadProgress:(ProgressEvent)=>{
        const progress=ProgressEvent.total?
        Math.round((ProgressEvent.loaded*100)/ProgressEvent.total):0;
        setUploadProgress(progress);
    }
    });


    setStatus('success');
    setUploadProgress(100);
}
catch(error){
    setStatus('error');
    setUploadProgress(0);
}


  };

  return (
    <Box 
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={glassBgSx}
    >
      <Typography variant="h4" mb={2}>
        Feedback
      </Typography>

      <Stack spacing={2}>
       
        <Controller
          name="name"
          control={control}
          rules={{ required: "Name is required" }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="Name"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              sx={selectSx}
              fullWidth
            />
          )}
        />



         <Controller
          name='commentType'
          control={control}
          rules={{required: "Please select feedback type"}}
          render={({field,fieldState})=>(
            <FormControl fullWidth margin='normal' error={!!fieldState.error} sx={selectSx}>
            <InputLabel>Query Type</InputLabel>
            <Select 
            {...field}
            label='Query Type' sx={selectSx}>
              <MenuItem value="Positive">Positive</MenuItem>
        <MenuItem value="Negative">Negative</MenuItem>
            </Select>
            <FormHelperText>{fieldState.error?.message}</FormHelperText>
           
            </FormControl>
          )}
          />
      

        <Controller
          name="comment"
          control={control}
          rules={{ required: "Comment is required" }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="Comment"
              multiline
              rows={4}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              sx={selectSx}
              fullWidth
            />
          )}
        />

      
        <Button variant="outlined" component="label" sx={selectSx}>
          Upload Image
          <input
            hidden
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            sx={selectSx}
          />
        </Button>

    
     
        {imageBase64 && (
            <div>
          <Box
            component="img"
            display={"inline-block"}
            src={imageBase64}
            alt="Preview"
            sx={{ width: 120, borderRadius: 1, color:"white" }}
          />
          </div>
        )}
        {
            file && (
                <div className="bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 text-transparent  bg-clip-text mb-7">
                    <p>File Name: {file.name}</p>
                    <p>File Size: {(file.size/1024).toFixed(2)}</p>
                    <p>Type: {file.type}</p>
                </div>
            )
        }

        {
        status==='uploading' && (
            <div className="w-full h-5 mb-10  bg-slate-800/20 border border-blue-500
             ">
                <div className="bg-[#34D399] h-full transition-all duration-300 "
  style={{ width: `${uploadProgress}%` }}>
                    <p>{uploadProgress}% upload</p>
                      
                </div>
            </div>
        )
        }
         {
            status==='success' && (
                <div className="text-center flex justify-center">

                <p className="  inline-flex items-center px-2 sm:px-4 lg:px-5 space-x-2 max-w-1xl rounded-lg bg-blue-500/10 border border-blue-500/20 transition-all animate-in  slide-in-from-top duration-700 delay-300  mb-4 sm:mb-6 lg:mb-8">File Upload SuccessFull</p>
                </div>
            )
        }
        {
            status==='error' && (
                <p>Upload Failed. Please Try again</p>
            )
        }
      

        <Button type="submit" variant="contained" size="large">
          Submit Feedback
        </Button>
      </Stack>
    </Box>
  );
};

export default FeedbackForm;
