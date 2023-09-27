/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Download2RemovebgPreview extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "download__2_-removebg-preview",
        "./Download2RemovebgPreview/costumes/download__2_-removebg-preview.png",
        { x: 161, y: 51 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Switch" },
        this.whenIReceiveSwitch
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Switch" },
        this.whenIReceiveSwitch2
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
    this.stage.watchers.yourDogeCollected.visible = false;
  }

  *whenGreenFlagClicked2() {
    this.visible = false;
  }

  *whenKeySpacePressed() {
    this.visible = true;
  }

  *whenKeySpacePressed2() {
    this.visible = true;
  }

  *whenIReceiveSwitch() {
    this.visible = true;
  }

  *whenIReceiveSwitch2() {
    this.stage.watchers.yourDogeCollected.visible = true;
  }
}
