# Generated by Django 5.1.7 on 2025-03-23 07:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0018_alter_userdetails_profile_picture'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userdetails',
            name='profile_picture',
            field=models.ImageField(blank=True, null=True, upload_to='uploads/images'),
        ),
    ]
