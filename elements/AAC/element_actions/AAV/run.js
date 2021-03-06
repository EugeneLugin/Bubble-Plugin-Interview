function(instance, properties, context) {
	switch(properties.quality) {
      case "240p":
        instance.data.constraints.video.optional[0].minWidth = 320;
        instance.data.videoBitrate = 300;	
  		instance.data.audioBitrate = 128;    
    	instance.data.videoFrameRate = 29.97;
        break;
      case "480p":
        instance.data.constraints.video.optional[0].minWidth = 640;
        instance.data.videoBitrate = 1500;	
  		instance.data.audioBitrate = 256;    
    	instance.data.videoFrameRate = 29.97;
        break;
      case "720p":
        instance.data.constraints.video.optional[0].minWidth = 1280;
        instance.data.videoBitrate = 3000;	
  		instance.data.audioBitrate = 320;    
    	instance.data.videoFrameRate = 29.97;
        break;
    }
}