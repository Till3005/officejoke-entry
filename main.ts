const standupRule =
  "Our standup has one rule: you may only report what you did yesterday if it differs from what you reported yesterday.";

const render = (line: string): string => `${line}\n`;

const main = (): void => {
  process.stdout.write(render(standupRule));
};

main();
