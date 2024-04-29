const { postService } = require("../services");

const addPost = async (req, res) => {
  const body = req.body;
  const post = await postService.addPost(body);

  console.log(body);

  res.status(201).json({
    message: "post Created success",
    post,
  });
};

const getPost = async (req, res) => {
  const body = req.body;
  console.log(body);
  const post = await postService.getPost();
  res.status(200).json({
    message: "post get Success",
    post,
  });
};

const deletePost = async(req,res)=>{
    const id = req.params.id;

    const post = await postService.deletePost(id)
    res.status(200).json({
        message: "post deleted Success",
        post,
      });
}

module.exports = {
  addPost,
  getPost,
  deletePost,
};
