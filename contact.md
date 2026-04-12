---
layout: default
title: "Contact"
description: "Get in touch."
permalink: /contact/
---

<div class="container">
  <header class="page-header">
    <h1>Contact</h1>
    <p>Have a question or want to work together? Send a message.</p>
  </header>

  <form action="https://formspree.io/f/xojyalrq" method="POST" class="contact-form">
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" placeholder="Your name" required>
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" name="_replyto" placeholder="your@email.com" required>
    </div>
    <div class="form-group">
      <label for="message">Message</label>
      <textarea id="message" name="message" placeholder="What's on your mind?" required></textarea>
    </div>
    <button type="submit" class="btn btn-primary btn-submit">Send Message</button>
  </form>
</div>
