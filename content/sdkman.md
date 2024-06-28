---
tags:
  - computer/command
  - computer/java
  - publish
aliases: []
created: 2022-08-02-17:17
updated: 2024-06-28 16:28
---
# Sdkman
## How to install
```bash
curl -s "https://get.sdkman.io" | bash
source "$HOME/.sdkman/bin/sdkman-init.sh"
```

## How to use
```bash
# SDK 버전확인
sdk version

# 설치 가능한 자바 버젼 확인
sdk list java 

# java 설치
sdk install java 17.0.3-tem

# java 사용법
sdk use java 17.0.3-tem

# 지금 version 확인
sdk current

# default java 변경 명령어
sdk default java 17.0.3-tem

# .sdkmanrc을 통해 쉽게 java version 변경이 가능하다.
sdk env init
```

## Reference
- https://sdkman.io
- https://sdkman.io/usage

