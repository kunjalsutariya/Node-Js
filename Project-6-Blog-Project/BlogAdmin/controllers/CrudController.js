const BlogModle = require('../models/crudModel');
const fs = require('fs');
const path = require('path')
const AddBlog = (req,res) =>{
    return res.render("Addblog")
}
const Showblog = async(req,res) =>{
    try {
        const blog = await BlogModle.find()
        res.render('Showblog',{blog:blog})
        
    } catch (error) {
        console.log(error);
        return false;
        
    }
}

const insertBlog = async(req,res) =>{
    try{
        const {title,description} = req.body
        // console.log(req.body);
        BlogModle.create({
            title:title,
            description:description,
            image:req.file.path
        })
        console.log("Blog Add successsfully");
        return res.redirect('/admin')
        
    }catch(err){
          console.log(err);
          return false
    }
}
const deleteBlog = async(req,res) =>{
    try {
        const deid = req.query.deletId;
        let single = await BlogModle.findById(deid);
        fs.unlinkSync(single.image);
       
        // // console.log(deid);
        await  BlogModle.findByIdAndDelete(deid);

        console.log("Deleted..");
        return res.redirect('/admin')
        
    } catch (error) {
        console.log(error);
        return false;
        
    }
}
const UpdateBlog = async(req,res) =>{
    try {
        const{editid,title,description} = req.body;
        
        // await BlogModle.findByIdAndUpdate(editid,{
        //     title:title,
        //     description:description,
        //     // image:req.file.path

        // })
        // console.log("Updated..");
        //     return res.redirect('/admin')
        if(req.file){
            const single = await BlogModle.findById(editid);
            fs.unlinkSync(single.image);
             await BlogModle.findByIdAndUpdate(editid,{
                        title:title,
                        description:description,
                        image:req.file.path

                    })
                    console.log("Updated..");
                        return res.redirect('/admin')
        }else{
            const single = await BlogModle.findById(editid);
             await BlogModle.findByIdAndUpdate(editid,{
                        title:title,
                        description:description,
                        image:single.image

                    })
                    console.log("Updated..");
                        return res.redirect('/admin')
        }
        
    } catch (error) {
        console.log(error)
        return false;
    }
}

const editBlog = async(req,res) =>{
    try {
        const eid = req.query.editId
        // console.log(eid);
        const single = await BlogModle.findById(eid)
        return res.render('Editblog',{
            single
        }
    )       
    } catch (error) {
        console.log(error);
        return false;
        
    }
}
module.exports = {
    AddBlog,insertBlog,Showblog,deleteBlog,editBlog,UpdateBlog
}