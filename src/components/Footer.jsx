import React from 'react'
import {
  AiFillFacebook,
  AiFillYoutube,
  AiFillInstagram
} from 'react-icons/ai';

const Footer = () => {
  return <footer>
    <div>
        <h1>TechStar</h1>
        <p>&copy; all rights reserved</p> 
    </div>

    <div>
        <h4>Follow Me</h4>
        <div>
            <a href="#" target={'blank'}><AiFillYoutube />Youtube</a>
            <a href="#" target={'blank'}><AiFillInstagram />Instagram</a>
            <a href="#" target={'blank'}><AiFillFacebook />Facebook</a>
        </div>
    </div>
  </footer>
}

export default Footer