package com.example.demo.controller;

import com.example.demo.api.PostApi;
import com.example.demo.domain.Post;
import com.example.demo.dto.PostDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/posts")
public class PostEndpoint {

    private PostApi postApi;

    @Autowired
    public PostEndpoint(PostApi postApi){
        this.postApi = postApi;
    }
    @GetMapping
    public List<Post> getPosts(){
        return postApi.getAllPosts();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Post addPost(@RequestBody PostDto postDto){
        Post post = new Post();
        post.setName(postDto.getName());
        post.setDescription(postDto.getDescription());
        return postApi.addPost(post);
    }
}
