function FindProxyForURL(url, host)
{
if (!isInNet(myIpAddress(), "10.19.174.0", "255.255.252.0") &&
    !isInNet(myIpAddress(), "10.19.176.0", "255.255.255.0") &&
    !isInNet(myIpAddress(), "10.19.177.0", "255.255.255.0") &&
    !isInNet(myIpAddress(), "10.19.242.0", "255.255.252.0") &&
    !isInNet(myIpAddress(), "10.19.244.0", "255.255.255.0") &&
    !isInNet(myIpAddress(), "10.19.245.0", "255.255.255.0") &&
	!isInNet(myIpAddress(), "10.19.248.0", "255.255.252.0") &&
	!isInNet(myIpAddress(), "10.18.128.0", "255.255.248.0") &&
	!isInNet(myIpAddress(), "10.19.220.0", "255.255.252.0") &&
	!isInNet(myIpAddress(), "10.19.210.0", "255.255.254.0")) 
    {    
	return "DIRECT";
    }
else if (shExpMatch(host, "blogs.nvidia.com") ||
    shExpMatch(host, "*.amazonaws.com") ||
    shExpMatch(host, "*.yahoo.com") ||
    shExpMatch(host, "*.yahoo.com.hk") ||
    shExpMatch(host, "*.dropboxpartners.com") ||
    shExpMatch(host, "*.db.tt") ||
    shExpMatch(host, "*.dropbox.com") ||
    shExpMatch(host, "*.dropboxdocs.com") ||
    shExpMatch(host, "*.dropboxmail.com") ||
    shExpMatch(host, "*.dropboxteam.com") ||
    shExpMatch(host, "*.dbstatic.com") ||
    shExpMatch(host, "dropbox.zendesk.com") ||
    shExpMatch(host, "*.cloudfront.net") ||
    shExpMatch(host, "dl.dropboxusercontent.com") ||
    shExpMatch(host, "*.boxcdn.net") ||
    shExpMatch(host, "*.box.net") ||
    shExpMatch(host, "*.box.com") ||
    shExpMatch(host, "*.boxcloud.com") ||
    shExpMatch(host, "*.google.com") ||
    shExpMatch(host, "*.google.ca") ||
    shExpMatch(host, "*.googleapis.com") ||
    shExpMatch(host, "*.gstatic.com") ||
    shExpMatch(host, "*.googleusercontent.com") ||
    shExpMatch(host, "*.googleadservices.com") ||
    shExpMatch(host, "*.ytimg.com") ||
    shExpMatch(host, "*.aspnetcdn.com") ||
    shExpMatch(host, "*.bing.com") ||
    shExpMatch(host, "*.google.com.hk") ||
    shExpMatch(host, "*.googletagmanager.com") ||
    shExpMatch(host, "*.sophosxl.net") ||
    shExpMatch(host, "www.squid-cache.org") ||
    shExpMatch(host, "blogs.nvidia.com") ||
    shExpMatch(host, "*.google-analytics.com") ||
    shExpMatch(host, "*.en25.com") ||
    shExpMatch(host, "services.nvidia.com") ||
    shExpMatch(host, "hkmail.nvidia.com") ||
    shExpMatch(host, "*.googledrive.com") ||
    shExpMatch(host, "*.googlevideo.com") ||
    shExpMatch(host, "*.googlesyndication.com") ||
    shExpMatch(host, "*.youtu.be") ||
    shExpMatch(host, "*.youtube.com") ||
    shExpMatch(host, "*.ggpht.com") ||
    shExpMatch(host, "*.2mdn.net") ||
    shExpMatch(host, "developer.android.com") ||
	shExpMatch(host, "*.wikipedia.org") ||
	shExpMatch(host, "*.ustream.tv") ||
	shExpMatch(host, "*.akamaihd.net") ||
	shExpMatch(host, "*.nvda.ai") ||
	shExpMatch(host, "*youtu.be") ||
	shExpMatch(host, "*gmail.com") ||
	shExpMatch(host, "*.disqus.com") ||
	shExpMatch(host, "*.wikipedia.org") ||
	shExpMatch(host, "*.blogger.com") ||
	shExpMatch(host, "*googletamanager.com") ||
        shExpMatch(host, "*.tensorflow.org") ||
        shExpMatch(host, "*.mellanox.com") ||
        shExpMatch(host, "*.vimeo.com") ||
        shExpMatch(host, "*.doubleclick.net") ||
        shExpMatch(host, "*.nvidiagrid.net"))
	
    {
	return "PROXY 10.18.66.145:3128";
    }
else
    {    
	return "DIRECT";
    }
}

