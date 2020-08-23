# 前后端数据交互加密AES+RSA

附件下载：[前后端数据交互加密实例.zip](https://links.jianshu.com/go?to=http%3A%2F%2Ffile.yocoder.cn%2FarticleAccessory%2F%E5%89%8D%E5%90%8E%E7%AB%AF%E6%95%B0%E6%8D%AE%E4%BA%A4%E4%BA%92%E5%8A%A0%E5%AF%86%E5%AE%9E%E4%BE%8B.zip)

## 简单介绍一下AES和RSA

- AES：对称加解密，加密解密使用同一个秘钥。
- RSA：非对称加解密，使用公钥加密数据，只有对应的私钥才能解密，加密方和解密方各自保存秘钥对中的一个。

## 为什么前后端交互要结合AES和RSA

1. 如果只用AES
    前端要加密数据，就需要保存秘钥，我们知道保存在前端的东西都不是秘密，秘钥泄露后，拿到秘钥和加密后的数据，就可以解密，加密毫无意义。
2. 如果只用RSA
    前端只保存秘钥对中的一个，即使泄露，也无法解密数据，解决了AES的问题。但是RSA效率低，每次交互都进行加解密，对性能影响较大。

> 结合使用：AES加密数据，RSA加密秘钥。AES的秘钥动态生成，避免了前端保存秘钥导致泄露的可能，RSA对秘钥加密，保证秘钥传输过程的安全。最终提交到后端的数据是：AES加密后的数据 + RSA加密后的秘钥

## 看这张图就够了

![img](https:////upload-images.jianshu.io/upload_images/15059580-4fba53b4a28deb50.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

加解密序列图



作者：_刘家强
链接：https://www.jianshu.com/p/38f3fa8c33ff
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。