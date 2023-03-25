void setup()
{
  Serial.begin(38400);
  Serial.println("Enter AT commands:");

  delay(2000);
}

void loop()
{

  // Keep reading from HC-05 and send to Arduino Serial Monitor
  if (Serial.available())
    Serial.write(Serial.read());

  // Keep reading from Arduino Serial Monitor and send to HC-05
  if (Serial.available())
    Serial.write(Serial.read());
}
