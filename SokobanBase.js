﻿/*   This is the base file for the Sokoban assignment - include this one in your HTML page, before you add the main script file*/

/*   Enum of CSS Classes for the static elements   */
var Tiles = {
  Wall: "tile-wall",
  Space: "tile-space",
  Goal: "tile-goal"
};

/*   Enum of CSS Classes for the moving elements   */
var Entities = {
  Player: "entity-player",
  PlayerGoal: "entity-player-goal",
  Block: "entity-block",
  BlockDone: "entity-block-goal"
};

/*  Legend
    W = Wall
    B = Movable block
    P = Player starting position
    G = Goal area for the blocks
*/
var tileMap01 = {
  width: 19,
  height: 16,
  mapGrid: [
    [
      [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "],
    ],
    [
      [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "],
    ],
    [
      [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "],
    ],
    [
      [" "], [" "], [" "], [" "], ["W"], ["W"], ["W"], ["W"], ["W"], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "],
    ],
    [
      [" "], [" "], [" "], [" "], ["W"], [" "], [" "], [" "], ["W"], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "],
    ],
    [
      [" "], [" "], [" "], [" "], ["W"], ["B"], [" "], [" "], ["W"], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "],
    ],
    [
      [" "], [" "], ["W"], ["W"], ["W"], [" "], [" "], ["B"], ["W"], ["W"], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "],
    ],
    [
      [" "], [" "], ["W"], [" "], [" "], ["B"], [" "], ["B"], [" "], ["W"], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "],
    ],
    [
      ["W"], ["W"], ["W"], [" "], ["W"], [" "], ["W"], ["W"], [" "], ["W"], [" "], [" "], [" "], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"],
    ],
    [
      ["W"], [" "], [" "], [" "], ["W"], [" "], ["W"], ["W"], [" "], ["W"], ["W"], ["W"], ["W"], ["W"], [" "], [" "], ["G"], ["G"], ["W"],
    ],
    [
      ["W"], [" "], ["B"], [" "], [" "], ["B"], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], ["G"], ["G"], ["W"],
    ],
    [
      ["W"], ["W"], ["W"], ["W"], ["W"], [" "], ["W"], ["W"], ["W"], [" "], ["W"], ["P"], ["W"], ["W"], [" "], [" "], ["G"], ["G"], ["W"],
    ],
    [
      [" "], [" "], [" "], [" "], ["W"], [" "], [" "], [" "], [" "], [" "], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"],
    ],
    [
      [" "], [" "], [" "], [" "], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "],
    ],
    [
      [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "],
    ],
    [
      [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "],
    ],
  ],
};

var tileMap02 = {
  width: 16,
  height: 12,
  mapGrid: [
    [
      [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "],
    ],
    [
      [" "], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], [" "], [" "], [" "],
    ],
    [
      [" "], ["W"], ["G"], ["G"], [" "], [" "], ["W"], [" "], [" "], [" "], [" "], [" "], ["W"], ["W"], ["W"], [" "],
    ],
    [
      [" "], ["W"], ["G"], ["G"], [" "], [" "], ["W"], [" "], ["B"], [" "], [" "], ["B"], [" "], [" "], ["W"], [" "],
    ],
    [
      [" "], ["W"], ["G"], ["G"], [" "], [" "], ["W"], ["B"], ["W"], ["W"], ["W"], ["W"], [" "], [" "], ["W"], [" "],
    ],
    [
      [" "], ["W"], ["G"], ["G"], [" "], [" "], [" "], [" "], ["P"], [" "], ["W"], ["W"], [" "], [" "], ["W"], [" "],
    ],
    [
      [" "], ["W"], ["G"], ["G"], [" "], [" "], ["W"], [" "], ["W"], [" "], [" "], ["B"], [" "], ["W"], ["W"], [" "],
    ],
    [
      [" "], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], [" "], ["W"], ["W"], ["B"], [" "], ["B"], [" "], ["W"], [" "],
    ],
    [
      [" "], [" "], [" "], ["W"], [" "], ["B"], [" "], [" "], ["B"], [" "], ["B"], [" "], ["B"], [" "], ["W"], [" "],
    ],
    [
      [" "], [" "], [" "], ["W"], [" "], [" "], [" "], [" "], ["W"], [" "], [" "], [" "], [" "], [" "], ["W"], [" "],
    ],
    [
      [" "], [" "], [" "], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], [" "],
    ],
    [
      [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "],
    ],
  ],
};

var tileMap03 = {
  width: 18,
  height: 15,
  mapGrid: [
    [
      ["W"], ["W"], ["W"], [" "], [" "], [" "], [" "], [" "], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"],
    ],
    [
      ["W"], ["P"], ["W"], [" "], [" "], [" "], [" "], [" "], ["W"], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], ["W"],
    ],
    [
      ["W"], [" "], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], ["B"], ["B"], ["W"], ["W"], ["W"], [" "], [" "], ["W"],
    ],
    [
      ["W"], [" "], ["W"], [" "], [" "], [" "], [" "], ["W"], ["W"], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], ["W"],
    ],
    [
      ["W"], [" "], ["W"], [" "], ["B"], [" "], [" "], ["W"], ["W"], [" "], ["W"], ["W"], ["W"], [" "], ["B"], [" "], [" "], ["W"],
    ],
    [
      ["W"], [" "], ["W"], ["W"], ["W"], ["W"], [" "], ["W"], ["W"], [" "], ["B"], [" "], [" "], [" "], ["W"], ["W"], [" "], ["W"],
    ],
    [
      ["W"], [" "], [" "], ["G"], ["W"], ["W"], [" "], ["W"], ["W"], ["W"], ["W"], ["W"], [" "], [" "], [" "], ["B"], [" "], ["W"],
    ],
    [
      ["W"], [" "], [" "], ["G"], ["W"], ["W"], [" "], ["W"], ["W"], [" "], [" "], [" "], [" "], [" "], ["W"], ["W"], ["W"], ["W"],
    ],
    [
      ["W"], [" "], [" "], ["W"], ["W"], ["W"], [" "], ["W"], ["W"], [" "], ["W"], ["W"], [" "], [" "], ["W"], [" "], [" "], [" "],
    ],
    [
      ["W"], [" "], [" "], ["W"], ["W"], ["W"], [" "], ["W"], ["W"], [" "], [" "], ["B"], [" "], [" "], ["W"], ["W"], ["W"], ["W"],
    ],
    [
      ["W"], [" "], [" "], ["W"], ["W"], ["W"], [" "], ["W"], ["W"], ["W"], ["W"], ["W"], [" "], [" "], ["G"], ["G"], ["G"], ["W"],
    ],
    [
      ["W"], [" "], [" "], ["B"], [" "], [" "], [" "], ["W"], ["W"], ["W"], ["W"], ["W"], [" "], [" "], ["G"], ["G"], ["G"], ["W"],
    ],
    [
      ["W"], [" "], [" "], [" "], [" "], [" "], [" "], [" "], ["W"], ["W"], ["W"], ["W"], [" "], [" "], ["W"], ["W"], ["W"], ["W"],
    ],
    [
      ["W"], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], ["W"], [" "], [" "], [" "],
    ],
    [
      ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], ["W"], [" "], [" "], [" "],
    ],
  ],
};

/*
var tileMap_template = {
  width: 19,
  height: 16,
  mapGrid: [
    [
      [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "],
    ],
    [
      [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "],
    ],
    [
      [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "],
    ],
    [
      [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "],
    ],
    [
      [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "],
    ],
    [
      [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "],
    ],
    [
      [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "],
    ],
    [
      [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "],
    ],
    [
      [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "],
    ],
    [
      [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "],
    ],
    [
      [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "],
    ],
    [
      [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "],
    ],
    [
      [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "],
    ],
    [
      [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "],
    ],
    [
      [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "],
    ],
    [
      [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "], [" "],
    ],
  ],
};
*/
