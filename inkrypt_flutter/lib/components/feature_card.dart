import 'package:flutter/material.dart';

class FeatureCard extends StatelessWidget {
  final String title;
  final String assetName;

  const FeatureCard({super.key, required this.title, required this.assetName});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16),
      width: double.infinity,
      decoration: BoxDecoration(
        border: Border.all(
          color: const Color.fromRGBO(46, 207, 242, 20),
        ),
        borderRadius: const BorderRadius.all(Radius.circular(40.0)),
      ),
      child: Column(
        children: [
          Text(
            title,
            style: const TextStyle(
              fontSize: 20,
              fontFamily: "SpaceGrotesk",
              fontWeight: FontWeight.bold,
              color: Colors.white,
            ),
          ),
          const SizedBox(height: 16),
          Image.asset(
            assetName,
            height: 122,
          )
        ],
      ),
    );
  }
}
