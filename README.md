# check-cont-number

This package checks digit of container.

## Install

via [npm](https://npmjs.org/)

```sh
$ npm install check-cont-number
```

via [yarn](https://yarnpkg.com)

```sh
$ yarn add check-cont-number
```

## How is a check digit calculated?

As the check digit is calculated using an algorithm that takes into account both the BIC code and serial number, it is imperative that the check digit be modified when containers are re-marked with a different BIC code.

<p align="center">
  <img src="https://www.bic-code.org/wp-content/themes/bic/images/ik/idnumber.png">
</p>

- The owner prefix (BIC code): three capital letters of the Latin alphabet to indicate the owner or principal operator of the container.
- The equipment category identifier: one capital letter as follows:
  - <b>U</b> for all freight containers.
  - <b>J</b> for detachable freight container-related equipment.
  - <b>Z</b> for trailers and chassis.
  - The serial number: six Arabic numerals, left at owner‘s or operator‘s option.
  - The check digit: one Arabic numeral providing a means of validating the recording and transmission accuracies of the owner code and serial number.
