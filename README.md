# easing
捲動至指定元素

# 範例
https://starsweet0831.github.io/easing/
# 使用方式
## 連結CDN
將 CDN 放在 body 結束標籤前https://starsweet0831.github.io/easing/main.js
~~~
<script src="https://starsweet0831.github.io/easing/main.js"></script>
~~~
## 捲動說明
-----------------|-----------------
屬性名稱 | 屬性說明
data-st-target | 要前往元素的 ID 名稱 
data-st-duration | 捲動所花的時間 (毫秒)
data-st-offset | 位移的大小
### 範例
~~~
<a href="" data-st-target="area2" data-st-duration="800" data-st-offset="100">連結2</a>
~~~
## 箭頭說明
屬性名稱 | 屬性說明
-------------|-------------
data-st-top | 箭頭要出現的高度 
data-st-time | 特效的持續時間
### 範例
~~~
<a id="arrow" data-st-target="top" data-st-duration="800" data-st-top="300" data-st-time="600"></a>
~~~