# Secure Chat

Conversation over chat is an integral part of our daily life. We chat at home, office, during commute and all possible places ;).
Though your chat should be private, there is chance of somebody invading your privacy.
For example, if you are travelling in metro/bus and doing chat; someone can sniff through your should and read your chat.
In office, your collegue can read your messages while you are typing new message.


To chat more securely, Secure Chat provide an encryption to your chat message. As you read your message, after few seconds chat message will get encrypted.
So now other people who is trying to sniff or stalk your message will see encrypted text. You can see your original message by clicking on particular message.

When you are at private place or home, you can disable encryption feature and chat normally.

## Demo

![demo1](https://cloud.githubusercontent.com/assets/4145169/15276236/fc23da4e-1aff-11e6-93ce-3e97d951f926.gif)

## Configure encryption interval
Default encryption interval is set to ten seconds. You can configure this interval as per your choice through chat setting option.

## Tweeter Integration
You can tweet selected message on your tweeter wall from your chat window in one click.

## Search User
You can search your contact as you type their nam

## Enable/Disable Chat Encryption
Encryption setting can be configured per conversation. So you can have some conversation encrypted and some plain text as per your comfort level.

I have used Stanford Javascript Crypto Library for encryption and decryption.
http://bitwiseshiftleft.github.io/sjcl/

## Class Diagram

![classdiagram1](https://cloud.githubusercontent.com/assets/4145169/15276365/bb9e3056-1b03-11e6-8567-cd05f3f3a8a2.jpg)


## Configure Project

Clone this repo into new project folder (e.g., `my-proj`).
```bash
git clone  hhttps://github.com/rumblex/angularattack2016-balramchavan  my-proj
cd my-proj
```

## Install npm packages

Install the npm packages described in the `package.json` and verify that it works:

**Attention Windows Developers:  You must run all of these commands in administrator mode**

```bash
npm install
npm start
```

The `npm start` command first compiles the application, 
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.

Shut it down manually with Ctrl-C.

## Author
Balram Chavan

https://github.com/ultrasonicsoft

balram.chavan@angular.cloud
