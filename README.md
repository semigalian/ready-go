# Ready Go - Armwrestling Reaction Trainer

A reaction training app for armwrestling athletes. Improve your start time with randomized audio signals and customizable intervals.

## Features

- **Random Interval Training**: Signals play at random intervals to simulate real competition conditions
- **Customizable Timing**: Adjust minimum and maximum intervals (1-10 seconds)
- **Audio Cues**: Uses "Ready Go" audio signal for clear start indication
- **Visual Feedback**: Color-coded interface shows when to prepare and when to go
- **Continuous Training**: Automatically cycles through preparation and signal phases

## How to Use

1. **Set Your Intervals**: Use the sliders to adjust the minimum and maximum wait times between signals
2. **Start Training**: Click the green "Start Training" button to begin
3. **Wait for the Signal**: The screen will show "Get Ready..." while you wait
4. **React When You Hear "Go"**: When the audio plays and screen turns green, that's your cue to react
5. **Stop Anytime**: Click the red "Stop Training" button to end the session

## Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/semigalian/ready-go.git
cd ready-go
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Training Tips

- **Start Easy**: Begin with longer intervals (5-7 seconds) to get comfortable
- **Progress Gradually**: Decrease intervals as your reaction time improves
- **Stay Focused**: Keep your eyes on the screen and ears ready for the audio cue
- **Consistency**: Train regularly to build muscle memory and improve reaction speed
- **Competition Simulation**: Use shorter intervals (2-4 seconds) to simulate match pressure

## Technical Details

- **Framework**: Next.js 16 with React 19
- **Styling**: Tailwind CSS with shadcn/ui components
- **Audio**: HTML5 Audio API for reliable playback
- **Responsive**: Works on desktop and mobile devices

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License - feel free to use this for your training needs.
