<?php



namespace Composer\Autoload;

class ComposerStaticInit12f2c465f66772dabbd2db46d50e8268
{
    public static $prefixLengthsPsr4 = array (
        'V' =>
        array (
            'VelstackProjects\\Mnotify\\' => 17,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'VelstackProjects\\Mnotify\\' =>
        array (
            0 => __DIR__ . '/../..',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/vendor' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit12f2c465f66772dabbd2db46d50e8268::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit12f2c465f66772dabbd2db46d50e8268::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit12f2c465f66772dabbd2db46d50e8268::$classMap;

        }, null, ClassLoader::class);
    }
}
