


module.exports = {
  I2C_SLAVE__DEVICE_ADDRESS                                          : 0x0001,
  VHV_CONFIG__TIMEOUT_MACROP_LOOP_BOUND                              : 0x0008,
  ALGO__CROSSTALK_COMPENSATION_PLANE_OFFSET_KCPS                     : 0x0016,
  ALGO__CROSSTALK_COMPENSATION_X_PLANE_GRADIENT_KCPS                 : 0x0018,
  ALGO__CROSSTALK_COMPENSATION_Y_PLANE_GRADIENT_KCPS                 : 0x001A,
  ALGO__PART_TO_PART_RANGE_OFFSET_MM                                 : 0x001E,
  MM_CONFIG__INNER_OFFSET_MM                                         : 0x0020,
  MM_CONFIG__OUTER_OFFSET_MM                                         : 0x0022,
  GPIO_HV_MUX__CTRL                                                  : 0x0030,
  GPIO__TIO_HV_STATUS                                                : 0x0031,
  SYSTEM__INTERRUPT_CONFIG_GPIO                                      : 0x0046,
  PHASECAL_CONFIG__TIMEOUT_MACROP                                    : 0x004B,
  RANGE_CONFIG__TIMEOUT_MACROP_A_HI                                  : 0x005E,
  RANGE_CONFIG__VCSEL_PERIOD_A                                       : 0x0060,
  RANGE_CONFIG__VCSEL_PERIOD_B                                       : 0x0063,
  RANGE_CONFIG__TIMEOUT_MACROP_B_HI                                  : 0x0061,
//  RANGE_CONFIG__TIMEOUT_MACROP_B_LO                                  : 0x0062, //not used
  RANGE_CONFIG__SIGMA_THRESH                                         : 0x0064,
  RANGE_CONFIG__MIN_COUNT_RATE_RTN_LIMIT_MCPS                        : 0x0066,
  RANGE_CONFIG__VALID_PHASE_HIGH                                     : 0x0069,
  SYSTEM__INTERMEASUREMENT_PERIOD                                    : 0x006C,
  SYSTEM__THRESH_HIGH                                                : 0x0072,
  SYSTEM__THRESH_LOW                                                 : 0x0074,
  SD_CONFIG__WOI_SD0                                                 : 0x0078,
  SD_CONFIG__INITIAL_PHASE_SD0                                       : 0x007A,
  ROI_CONFIG__USER_ROI_CENTRE_SPAD                                   : 0x007F,
  ROI_CONFIG__USER_ROI_REQUESTED_GLOBAL_XY_SIZE                      : 0x0080,
//  SYSTEM__SEQUENCE_CONFIG                                            : 0x0081, //not used
//  SYSTEM__GROUPED_PARAMETER_HOLD                                     : 0x0082, //not used
  SYSTEM__INTERRUPT_CLEAR                                            : 0x0086,
  SYSTEM__MODE_START                                                 : 0x0087,
  RESULT__RANGE_STATUS                                               : 0x0089,
  RESULT__DSS_ACTUAL_EFFECTIVE_SPADS_SD0                             : 0x008C,
  RESULT__AMBIENT_COUNT_RATE_MCPS_SD                                 : 0x0090,
  RESULT__FINAL_CROSSTALK_CORRECTED_RANGE_MM_SD0                     : 0x0096,
  RESULT__PEAK_SIGNAL_COUNT_RATE_CROSSTALK_CORRECTED_MCPS_SD0        : 0x0098,
  RESULT__OSC_CALIBRATE_VAL                                          : 0x00DE,
  FIRMWARE__SYSTEM_STATUS                                            : 0x00E5,
  IDENTIFICATION__MODEL_ID                                           : 0x010F,
  ROI_CONFIG__MODE_ROI_CENTRE_SPAD                                   : 0x013E,
}


