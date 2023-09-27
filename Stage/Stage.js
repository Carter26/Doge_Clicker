/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180
      }),
      new Costume(
        "Night City With Street",
        "./Stage/costumes/Night City With Street.png",
        { x: 480, y: 360 }
      ),
      new Costume("Baseball 2", "./Stage/costumes/Baseball 2.svg", {
        x: 240,
        y: 180
      }),
      new Costume(
        "Night City With Street2",
        "./Stage/costumes/Night City With Street2.png",
        { x: 480, y: 360 }
      ),
      new Costume(
        "shutterstock_1086295871-750x406",
        "./Stage/costumes/shutterstock_1086295871-750x406.png",
        { x: 480, y: 357 }
      )
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.yourDogeCollected = 2;

    this.watchers.yourDogeCollected = new Watcher({
      label: "Your Doge Collected",
      style: "normal",
      visible: true,
      value: () => this.vars.yourDogeCollected,
      x: 245,
      y: 176
    });
  }
}
