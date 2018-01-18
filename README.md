# 「紫罗兰永恒花园」文字转换器

- 提供一个网页，可以在其中将英文字符转换为『紫罗兰永恒花园』（『ヴァイオレット・エヴァーガーデン』）中的文字。
- 包含组件：
  - `VioletEvergardenConverter`（转换页面）：`index.html` 和 `EvergardenConverterPage/`
  - `VioletEvergardenFont`（字体）：`font/`

# 来源/感谢

- 字体设计素材来自：
  - 『紫罗兰永恒花园』（官方网站：[公式サイト](http://violet-evergarden.jp/)）
  - 大写字母、数字、符号取材自 [PV 第4弾](https://www.youtube.com/watch?v=g5xWqjFglsk)
  - 小写字母取材自 [PV 第1弾](https://www.youtube.com/watch?v=UmApa2dBDPo)
- 字母解读知识来自：
  - [薇尔莉特到底写了什么？](http://www.bilibili.com/read/cv142910) ——[番剧研究所](http://space.bilibili.com/32708587)
- 合作制作者：
  - [0wew0](https://github.com/wang124yi) 提供了小写字母和符号部分的支持。

# 未完成的内容/帮助改进字体

- 目前这些字体均采用从原作中截图提取，但来源并没有足够的但字符清晰度，所以效果目前并不是很好。
- 如果有菊苣愿意帮忙，为每个字体绘制`高清图/矢量图/手写图`，请加入本项目吧。
- 目前 `j` 和 `z` 未能在原作中找到其写法，如果有认识的请告知或帮忙添加。
- 目前符号部分尚未补充完全。

# 文件(夹)说明

- `png-capital`：制作后的大写字母
- `png-lowercase`：制作后的小写字母
- `png-numsym`：制作后的数字和符号
- `snap-bili-lowercase`：番剧研究所的文章中提取的小写字母
- `snap-pv1-lowercase`：PV1 中截取的小写字母（背景文字画面）
- `snap-pv4-capital`：PV4 中截取的大写字母（打字机键盘画面）
- `main.fcp`：FontCreator 11.0 Pro 的工程文件。
- `index.html` 和 `EvergardenConverterPage`：转换网页相关文件。

# 已收录字符及其属性

## 字体格式

格式 | 轮廓 | OpenType | 间距表 | 字形名 | 小尺寸 | XML
:-:|:-:|:-:|:-:|:-:|:-:|:-:
TTF | TrueType | NO | new | auto | def | NO
OTF | CFF | YES | - | - | - | NO
WOFF | CFF | YES | - | - | - | YES

## 字体位置和尺寸
- 所有字符左侧和右侧边距均为 20。
- 数字底端为 Baseline ，顶端介于 CapHeight 和 x-Height 之间。
- 大写字母底端为 Baseline ，顶端为 CapHeight 。
- 小写字母底端为 Baseline ，顶端为 x-Height ，除了：
  - `b d h k l` 顶端为 CapHeight（高度同大写字母）。
  - `g n p x y` 底端为 -340（高度同大写字母）。
- 标点符号视具体而定。
- 详细见下表：

C | W | H | X | Y | C | W | H | X | Y
:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
'1' | auto | 565 | 20 | 0 | '2' | auto | 565 | 20 | 0
'3' | auto | 565 | 20 | 0 | '4' | auto | 565 | 20 | 0
'5' | auto | 565 | 20 | 0 | '6' | auto | 565 | 20 | 0
'7' | auto | 565 | 20 | 0 | '8' | auto | 565 | 20 | 0
'9' | auto | 565 | 20 | 0 | '0' | auto | 565 | 20 | 0
'A' | auto | 680 | 20 | 0 | 'a' | auto | 450 | 20 | 0
'B' | auto | 680 | 20 | 0 | 'b' | auto | 680 | 20 | 0
'C' | auto | 680 | 20 | 0 | 'c' | auto | 450 | 20 | 0
'D' | auto | 680 | 20 | 0 | 'd' | auto | 680 | 20 | 0
'E' | auto | 680 | 20 | 0 | 'e' | auto | 450 | 20 | 0
'F' | auto | 680 | 20 | 0 | 'f' | auto | 450 | 20 | 0
'G' | auto | 680 | 20 | 0 | 'g' | auto | 680 | 20 | -340
'H' | auto | 680 | 20 | 0 | 'h' | auto | 680 | 20 | 0
'I' | auto | 680 | 20 | 0 | 'i' | auto | 450 | 20 | 0
'J' | auto | 680 | 20 | 0 | 'j' | - | - | - | -
'K' | auto | 680 | 20 | 0 | 'k' | auto | 680 | 20 | 0
'L' | auto | 680 | 20 | 0 | 'l' | auto | 680 | 20 | 0
'M' | auto | 680 | 20 | 0 | 'm' | auto | 450 | 20 | 0
'N' | auto | 680 | 20 | 0 | 'n' | auto | 680 | 20 | -340
'O' | auto | 680 | 20 | 0 | 'o' | auto | 450 | 20 | 0
'P' | auto | 680 | 20 | 0 | 'p' | auto | 680 | 20 | -340
'Q' | auto | 680 | 20 | 0 | 'q' | auto | 450 | 20 | 0
'R' | auto | 680 | 20 | 0 | 'r' | auto | 450 | 20 | 0
'S' | auto | 680 | 20 | 0 | 's' | auto | 450 | 20 | 0
'T' | auto | 680 | 20 | 0 | 't' | auto | 450 | 20 | 0
'U' | auto | 680 | 20 | 0 | 'u' | auto | 450 | 20 | 0
'V' | auto | 680 | 20 | 0 | 'v' | auto | 450 | 20 | 0
'W' | auto | 680 | 20 | 0 | 'w' | auto | 450 | 20 | 0
'X' | auto | 680 | 20 | 0 | 'x' | auto | 680 | 20 | -340
'Y' | auto | 680 | 20 | 0 | 'y' | auto | 680 | 20 | -340
'Z' | auto | 680 | 20 | 0 | 'z' | - | - | - | -
' | 200 | auto | 20 | 0 | ',' | 200 | auto | 20 | 0
'(' | auto | 1020 | 20 | -285 | ')' | auto | 1020 | 20 | -285
',' | 200 | auto | 20 | 0 | - | - | - | - | -

# 协议 LICENSE

- 网页背景图和原始文字设计来自『[ヴァイオレット・エヴァーガーデン](http://violet-evergarden.jp/)』。
- 本项目字体文件参与制作者：[神楽坂雅詩](https://github.com/kagurazakayashi)、[0wew0](https://github.com/wang124yi)
- 你不能在未经原始文字设计者和本项目作者许可的前提下商业化分发或闭源分发本项目的副本或衍生作品。
- 你必须在副本和衍生作品中包含原始作品信息和本项目作者/来源信息。