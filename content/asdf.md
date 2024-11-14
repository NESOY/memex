---
tags:
  - computer/command
  - publish
aliases: []
created: 2024-07-12 16:32
updated: 2024-11-12 10:11
---
# Asdf
- java뿐만 아니라 다른 언어도 쉽게 설치하고 제어할 수 있는 패키지 매니저
  
## How to install
```
# install dependencies (필요시) 
brew install coreutils curl git 

# install asdf 
brew install asdf 

# add to shell
. /opt/homebrew/opt/asdf/libexec/asdf.sh

# java home 지정하기
. ~/.asdf/plugins/java/set-java-home.zsh
```

### How to install Java
```
# plugin 설치
asdf plugin add java
asdf plugin update java

# java version 확인
asdf list all java

# java 설치
asdf install java corretto-8.422.05.1

# 설치된 java 확인
asdf list java

# global
asdf global java corretto-8.422.05.1

# local
asdf local java corretto-8.422.05.1
```

### How to install Nodejs
- https://github.com/asdf-vm/asdf-nodejs
```
# plugin 설치
asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git
asdf plugin update nodejs

# nodejs version 확인
asdf list all nodejs

# nodejs 설치
asdf install nodejs 22.7.0

# 설치된 nodejs 확인
asdf list nodejs

# global
asdf global nodejs 22.7.0

# local
asdf local nodejs 22.7.0
```

## See Also
- [[sdkman]]

## Reference
- https://asdf-vm.com