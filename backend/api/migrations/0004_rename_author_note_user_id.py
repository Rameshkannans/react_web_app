# Generated by Django 5.1.7 on 2025-03-12 18:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_rename_contents_note_content'),
    ]

    operations = [
        migrations.RenameField(
            model_name='note',
            old_name='author',
            new_name='user_id',
        ),
    ]
