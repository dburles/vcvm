export default [
  'Arpeggiator',
  'Attenuator', // With a level knob and not much else.
  'Blank', // No parameters or ports. Serves no purpose except visual.
  'Chorus',
  'Clock generator',
  'Clock modulator', // Clock dividers, multipliers, etc.
  'Compressor', // With threshold, ratio, knee, etc parameters.
  'Controller', // Use only if the artist "performs" with this module. Simply having knobs is not enough. Examples: on-screen keyboard, XY pad.
  'Delay',
  'Digital',
  'Distortion',
  'Drum',
  'Dual', // The core functionality times two. If multiple channels are a requirement for the module to exist (ring modulator, mixer, etc), it is not a Dual module.
  'Dynamics',
  'Effect',
  'Envelope follower',
  'Envelope generator',
  'Equalizer',
  'Expander', // Expands the functionality of a "mother" module when placed next to it. Expanders should inherit the tags of its mother module.
  'External',
  'Flanger',
  'Function generator',
  'Granular',
  'LFO',
  'Limiter',
  'Logic',
  'Low pass gate',
  'MIDI',
  'Mixer',
  'Multiple',
  'Noise',
  'Panning',
  'Phaser',
  'Physical modeling',
  'Polyphonic',
  'Quad', // The core functionality times four. If multiple channels are a requirement for the module to exist (ring modulator, mixer, etc), it is not a Quad module.
  'Quantizer',
  'Random',
  'Recording',
  'Reverb',
  'Ring modulator',
  'Sample and hold',
  'Sampler',
  'Sequencer',
  'Slew limiter',
  'Switch',
  'Synth voice', // A synth voice must have, at the minimum, a built-in oscillator and envelope.
  'Tuner',
  'Utility', // Serves only extremely basic functions, like inverting, max, min, multiplying by 2, etc.
  'VCA',
  'VCF',
  'VCO',
  'Visual',
  'Vocoder',
  'Waveshaper',
];
