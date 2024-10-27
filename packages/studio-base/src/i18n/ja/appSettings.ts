// This Source Code Form is subject to the terms of the Mozilla Public
// License, v2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

import { TypeOptions } from "i18next";

export const appSettings: Partial<TypeOptions["resources"]["appSettings"]> = {
  about: "情報",
  advanced: "高度な設定",
  askEachTime: "毎回確認する",
  colorScheme: "カラースキーム",
  dark: "ダーク",
  debugModeDescription: "Foxgloveのデバッグ用のパネルと機能を有効にする",
  desktopApp: "デスクトップアプリ",
  displayTimestampsIn: "タイムスタンプを表示",
  experimentalFeatures: "実験的機能",
  experimentalFeaturesDescription: "これらの機能は挙動が不安定なため、日々の利用は推奨されません。",
  extensions: "拡張機能",
  followSystem: "システムに従う",
  general: "一般",
  language: "言語",
  layoutDebugging: "レイアウトデバッグ",
  layoutDebuggingDescription:
    "レイアウトストレージの開発およびデバッグ用の追加コントロールを表示する。",
  light: "ライト",
  messageRate: "メッセージレート",
  noExperimentalFeatures: "現在、実験的機能はありません。",
  ros: "ROS",
  settings: "設定",
  timestampFormat: "タイムスタンプ形式",
  webApp: "ウェブアプリ",
};
