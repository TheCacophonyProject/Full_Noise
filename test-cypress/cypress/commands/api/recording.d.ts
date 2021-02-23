// load the global Cypress types
/// <reference types="cypress" />

interface TrackInfo {
  // start_s? : 10,
  // end_s? : 22.2,
  tag?: string;
  // confidence?: number,
}

interface ThermalRecordingInfo {
  time?: Date;
  duration?: number;
  model?: string;
  tracks?: TrackInfo[];
  noTracks?: boolean; // by default there will normally be one track, set to true if you don't want tracks
  minsLater?: number; // minutes that later that the recording is taken
  secsLater?: number; // minutes that later that the recording is taken
}

declare namespace Cypress {
  interface Chainable {
    /**
     * upload a single recording to for a particular camera
     */
    uploadRecording(
      cameraName: string,
      details: ThermalRecordingInfo,
      log?: boolean
    ): Chainable<Element>;
  }
}