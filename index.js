import {
  Project,
  Sprite
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Download2RemovebgPreview from "./Download2RemovebgPreview/Download2RemovebgPreview.js";
import Download2RemovebgPreview4 from "./Download2RemovebgPreview4/Download2RemovebgPreview4.js";
import Download2RemovebgPreview3 from "./Download2RemovebgPreview3/Download2RemovebgPreview3.js";
import Download2RemovebgPreview5 from "./Download2RemovebgPreview5/Download2RemovebgPreview5.js";
import Download2RemovebgPreview6 from "./Download2RemovebgPreview6/Download2RemovebgPreview6.js";
import Download2RemovebgPreview7 from "./Download2RemovebgPreview7/Download2RemovebgPreview7.js";
import Download2RemovebgPreview2 from "./Download2RemovebgPreview2/Download2RemovebgPreview2.js";
import Button1 from "./Button1/Button1.js";
import Button3 from "./Button3/Button3.js";
import Screenshot202304209 from "./Screenshot202304209/Screenshot202304209.js";

const stage = new Stage({ costumeNumber: 5 });

const sprites = {
  Download2RemovebgPreview: new Download2RemovebgPreview({
    x: -167,
    y: 122,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3
  }),
  Download2RemovebgPreview4: new Download2RemovebgPreview4({
    x: -163.50751134166262,
    y: 4.763187556771314,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 8
  }),
  Download2RemovebgPreview3: new Download2RemovebgPreview3({
    x: 95.68675337931671,
    y: 123.70645708081551,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 7
  }),
  Download2RemovebgPreview5: new Download2RemovebgPreview5({
    x: -37.74142701375017,
    y: 3.891925572603583,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 5
  }),
  Download2RemovebgPreview6: new Download2RemovebgPreview6({
    x: 95.9698712939126,
    y: 3.5348429919902102,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 9
  }),
  Download2RemovebgPreview7: new Download2RemovebgPreview7({
    x: 222.31553718908955,
    y: 4.287647056000708,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 4
  }),
  Download2RemovebgPreview2: new Download2RemovebgPreview2({
    x: -40.58079667792957,
    y: 117.87426819639064,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 6
  }),
  Button1: new Button1({
    x: 196,
    y: 132,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  Button3: new Button3({
    x: -216,
    y: -156,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 10
  }),
  Screenshot202304209: new Screenshot202304209({
    x: -2,
    y: -3,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 2
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
