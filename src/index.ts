import { TelemetryClient } from './telemetryClient';

export async function createTelemetryClient(): Promise<TelemetryClient> {
  return new TelemetryClient();
}
