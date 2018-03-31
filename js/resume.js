;------------------------------------------------------------
; Copyright (c) 2007-2015 RICOH COMPANY, LTD
; All Rights Reserved
; Printer Driver Setup Information File
;------------------------------------------------------------

[Version]
Signature   = "$Windows NT$"
Provider    = %Ricoh%
ClassGUID   = {4D36E979-E325-11CE-BFC1-08002BE10318}
Class       = Printer
DriverVer  = 01/21/2015,4.6.0.0
DriverIsolation = 2

CatalogFile = ricu06.cat

[Manufacturer]
%Ricoh%=Ricoh,NTamd64,NT.5.1


;WindowsXP(amd64)
[Ricoh.NTamd64]
%DrvName% = PrinterModel64.dat,USBPRINT\RICOHMP_2001360F,LPTENUM\RICOHMP_2001360F,RICOHMP_2001360F
%CoDrvName% = PrinterModel64_ver.dat,USBPRINT\RICOHPCL6DriveforUP,LPTENUM\RICOHPCL6DriveforUP,RICOHPCL6DriveforUP

;WindowsXP(x86)
[Ricoh.NT.5.1]
%DrvName% = PrinterModel64.dat,USBPRINT\RICOHMP_2001360F,LPTENUM\RICOHMP_2001360F,RICOHMP_2001360F
%CoDrvN