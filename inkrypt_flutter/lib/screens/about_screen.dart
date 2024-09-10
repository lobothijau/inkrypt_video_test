import 'package:flutter/material.dart';

class AboutScreen extends StatelessWidget {
  const AboutScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      extendBodyBehindAppBar: true,
      appBar: AppBar(
        leading: IconButton(
          icon: const Icon(
            Icons.chevron_left,
            color: Colors.white,
            size: 40,
          ),
          onPressed: () => Navigator.of(context).pop(),
        ),
        title: const Text(
          "About the App",
          style: TextStyle(
              fontFamily: "SpaceGrotesk",
              fontSize: 20,
              fontWeight: FontWeight.bold,
              color: Colors.white),
        ),
        backgroundColor: Colors.transparent,
      ),
      body: Stack(children: [
        Image.asset("assets/images/bg.jpg"),
        SingleChildScrollView(
          child: SafeArea(
            child: Padding(
              padding: const EdgeInsets.all(16.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Padding(
                    padding: const EdgeInsets.symmetric(vertical: 24),
                    child: Center(
                      child: Image.asset(
                        "assets/images/about_icon.png",
                        height: 122,
                      ),
                    ),
                  ),
                  const Text(
                    "App Build Version : 1.1.1",
                    style: TextStyle(
                        fontWeight: FontWeight.bold,
                        fontFamily: "SpaceGrotesk",
                        fontSize: 16,
                        color: Colors.white),
                  ),
                  const SizedBox(height: 16),
                  const Text(
                    "My Video Player is designed to provide high-quality, protected content from our trusted partner video hosts. Whether you're accessing educational materials, entertainment, or any other exclusive videos, our player ensures a seamless and secure viewing experience.",
                    style: TextStyle(
                      fontFamily: "SpaceGrotesk",
                      fontSize: 16,
                      color: Colors.white,
                    ),
                  ),
                  const SizedBox(height: 16),
                  const Text(
                    "Our app leverages cutting-edge technology to maintain the integrity and confidentiality of the streamed content, allowing you to enjoy premium videos without worrying about unauthorized access or piracy.",
                    style: TextStyle(
                      fontFamily: "SpaceGrotesk",
                      fontSize: 16,
                      color: Colors.white,
                    ),
                  ),
                  const SizedBox(height: 16),
                  const Text(
                    "With My Video Player, you get the best of both worlds: top-tier video quality and robust protection.",
                    style: TextStyle(
                      fontFamily: "SpaceGrotesk",
                      fontSize: 16,
                      color: Colors.white,
                    ),
                  ),
                  const SizedBox(height: 16),
                  const Text(
                    "Discover the future of video streaming with Inkrypt Videos and enjoy the content you love with peace of mind.",
                    style: TextStyle(
                      fontFamily: "SpaceGrotesk",
                      fontSize: 16,
                      color: Colors.white,
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ]),
    );
  }
}
