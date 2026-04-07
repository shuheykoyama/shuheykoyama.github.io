---
layout: ../../layouts/project.astro
title: tnap - Let's take a nap 💤
img: ../../assets/images/projects/tnap.webp
img_alt: tnap
description: A screen saver for the terminal
dateFormatted: Apr 22nd, 2024
tags:
  - CLI
  - Terminal
  - Rust
  - DALL-E 3
---

![tnap](/images/projects/tnap.webp)

tnap is a screen saver for the terminal. You can rest the terminal in a secure.

## Features

- Display images in the terminal and use it as a screen saver
- Convert images to ASCII art
- Use images generated using DALL-E 3
- Generate by simply specifying a key in config.toml without thinking a prompt
- Of course, you can also generate images by specifying a prompt

## Screenshots

<div class="grid items-stretch w-full grid-cols-1 my-8 gap-7 sm:gap-5 sm:grid-cols-2">
  <img src="../../assets/images/projects/girl_with_headphone.webp" alt="girl_with_headphone" />
  <img src="../../assets/images/projects/girl_with_headphone_ascii.webp" alt="girl_with_headphone_ascii" />
</div>

## Demo Video

<div>
  <video
    controls
    class="w-full"
    style="border-radius: 30px; aspect-ratio: 16 / 9;"
    autoplay="autoplay"
    muted="muted"
    loop="loop"
    ><source src="../../assets/images/projects/tnap-demo.webm" type="video/mp4" />
  </video>
</div>

## Source Code

- [pigeon-sable/tnap](https://github.com/pigeon-sable/tnap)
