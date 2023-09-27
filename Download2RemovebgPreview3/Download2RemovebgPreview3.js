/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Download2RemovebgPreview3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "download__2_-removebg-preview",
        "./Download2RemovebgPreview3/costumes/download__2_-removebg-preview.png",
        { x: 161, y: 51 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Switch" },
        this.whenIReceiveSwitch
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Switch" },
        this.whenIReceiveSwitch2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Switch" },
        this.whenIReceiveSwitch3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Switch" },
        this.whenIReceiveSwitch4
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Switch" },
        this.whenIReceiveSwitch5
      )
    ];
  }

  *whenthisspriteclicked() {
    this.stage.vars.yourDogeCollected++;
    this.visible = false;
    yield* this.wait(2);
    this.visible = true;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *addScore(name) {}

  *whenIReceiveSwitch() {
    this.visible = true;
  }

  *whenIReceiveSwitch2() {
    this.visible = true;
  }

  *whenIReceiveSwitch3() {
    this.visible = true;
  }

  *whenIReceiveSwitch4() {
    this.visible = true;
  }

  *whenIReceiveSwitch5() {
    this.visible = true;
  }
}
