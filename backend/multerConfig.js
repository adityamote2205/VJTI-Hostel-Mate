import multer from 'multer';

// Multer configuration with destination and filename functions, and image filter
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      const currentDate = new Date().toISOString().replace(/:/g, '-');
      cb(null, 'image_' + currentDate + '_' + file.originalname);
    }
  });
  
// Define a filter function to only allow image files
const imageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true); // Accept image files
  } else {
    cb(new Error('Only image files are allowed!'), false); // Reject non-image files
  }
};


// Create Multer instance with storage and image filter
const upload = multer({ 
  storage: storage,
  fileFilter: imageFilter
});

export default upload;
