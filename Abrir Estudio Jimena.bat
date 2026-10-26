@echo off
cd /d "%~dp0"
powershell -Command "if (!(Get-NetTCPConnection -LocalPort 8085 -ErrorAction SilentlyContinue)) { Start-Process -WindowStyle Hidden node server.js }"
start "" "http://localhost:8085"
