export class Clock {
  private hour: number = 0;
  private minute: number = 0;

  constructor(hour: unknown, minute?: unknown) {
    const hourIsNumber = typeof hour === "number";
    const minuteIsNumber = typeof minute === "number";
    this.minute = 0;
    if (minuteIsNumber) {
      this.minute = minute;
    }
    if (hourIsNumber) {
      this.hour = hour;
    }
  }

  public toString(): unknown {
    let hour = this.hour;
    let minute = this.minute;
    // parse minute
    if (this.minute >= 0 && this.minute <= 59) {
      minute = this.minute;
    } else if (this.minute < 0) {
      const acc = Math.floor(this.minute / 60);
      const r = this.minute % 60;
      hour += acc;
      minute = 60 + r;
    } else if (this.minute > 59) {
      const acc = Math.floor(this.minute / 60);
      const r = this.minute % 60;
      hour += acc;
      minute = r;
    }

    // parse hour
    // if (hour >= 0 && hour <= 23) do nothing
    if (hour < 0) {
      const r = hour % 24;
      hour = r == 0 ? r : 24 + r;
    } else if (hour > 23) {
      hour = hour % 24;
    }

    const hourString = hour > 9 ? hour.toString() : `0${hour}`;
    const minuteString = minute > 9 ? minute.toString() : `0${minute}`;

    return `${hourString}:${minuteString}`;
  }

  public plus(minutes: unknown): Clock {
    const minuteIsNumber = typeof minutes === "number";
    let hour = this.hour;
    let minute = this.minute;
    if (minuteIsNumber) {
      minute += minutes;
    }
    return new Clock(hour, minute);
  }

  public minus(minutes: unknown): Clock {
    const minuteIsNumber = typeof minutes === "number";
    let hour = this.hour;
    let minute = this.minute;
    if (minuteIsNumber) {
      minute -= minutes;
    }
    return new Clock(hour, minute);
  }

  public equals(other: unknown): unknown {
    const otherIsClock = other instanceof Clock;
    if (otherIsClock) {
      const otherClock = other as Clock;
      return (
        this.toString() === otherClock.toString()
      );
    }
    return false;
  }
}
