---
layout: ../../layouts/project.astro
title: The memory room
img: /assets/images/projects/thememoryroom.webp
img_alt: The memory room
description: I will illuminate you with colors unique to me.
dateFormatted: Sep 14th, 2021
tags:
  - Interactive Art
  - Digital Fabrication
  - Computer Graphics
  - Arduino
  - Processing
---

![The memory room](/assets/images/projects/thememoryroom.webp)

"Gently encourage you. Color your heart."

The person who experiences this work chooses a color from a palette and colors it into the image.
This work, based on the theme of "communication that can be understood without words," expresses the abstract act of illuminating the hearts of others through the intuitive interaction of "coloring" with a palette and brush.
We believe that if you can illuminate the hearts of your loved ones with your colors, a strong connection will surely be born.
[Won the Grand Prize in the 30th Kyoto Sangyo University Digital Contents Contest.](http://info.cse.kyoto-su.ac.jp/?page_id=10073)

<!-- <br/> -->
<!---->
<!-- 「君をそっと励ます，心に色をつけていくように」 -->
<!---->
<!-- 体験者はパレットから色を選び，映像の中へ色をつけていく。 -->
<!-- この作品では，「言葉を使わずに分かり合えるコミュニケーション」をテーマに，他者の心を照らしていくという抽象的な行為を，パレットと筆で「色づける」という直感的なインタラクションで表現した。 -->
<!-- 大切な人の心をあなたの色で照らせたら，きっと強い繋がりが生まれると信じている。 -->
<!-- [第 30 回京都産業大学デジタルコンテンツコンテスト最優秀賞受賞。](http://info.cse.kyoto-su.ac.jp/?page_id=9957) -->

## Video

<div class="relative">
  <iframe
    src="https://www.youtube.com/embed/yhqCw1QHQDY?si=rgN2qwUDTKoOxAa9&enablejsapi=1"
    title="The memory room PV"
    class="w-full"
    style="border-radius: 30px; aspect-ratio: 16 / 9;"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    id="youtube-player"
  ></iframe>
  <script>
    // iframeにマウスイベントリスナーを追加
    const iframe = document.getElementById('youtube-player');
    if (iframe) {
      iframe.onload = () => {
        iframe.contentWindow.postMessage(`
          window.addEventListener('mousemove', (e) => {
            const rect = e.target.getBoundingClientRect();
            window.parent.postMessage({
              mouseX: e.clientX + rect.left,
              mouseY: e.clientY + rect.top
            }, '*');
          });
        `, '*');
      };
    }
  </script>
</div>
