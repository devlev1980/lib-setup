
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

## YL-lib-carousel

This is the demo project that shows how release library to npm.


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [YL-lib-carousel](#yl-lib-carousel)
- [Getting started](#getting-started)
- [Usage](#usage)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

`

``
  npm install yl-lib-carousel
``

## Usage

```typescript
import { Carousel } from 'yl-lib-carousel';

@Component({
  selector: 'my-component',
  template: `
  <yl-lib-carousel /> 
  [items]="items" 
  [config]="config">
  </<yl-lib-carousel />
  `,
  styleUrls: ['./app.component.scss'],
  imports: [CarouselComponent]
});

export class MyComponent



