# irkit_ts
IRkitを用いて家電操作を行う。Typescriptで構築。
## Setup
```
$ docker build -t irkit_ts .
$ docker run -itd -p hostport:80 --name irkit_ts irkit_ts
```
## 課題
* htmlの表示は正常に可能。
* `post_irkit.ts`において、fetchでのPOSTのリクエストがおかしい。
* 2021年現在、apiサーバ側がTLS1.2以降に対応していないため、IRKit Internet HTTP APIを用いるとブラウザ側で接続が拒否されてしまい、APIに接続できない。
* よって非稼働。
