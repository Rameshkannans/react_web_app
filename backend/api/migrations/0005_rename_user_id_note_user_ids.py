# Generated by Django 5.1.7 on 2025-03-12 18:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_rename_author_note_user_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='note',
            old_name='user_id',
            new_name='user_ids',
        ),
    ]
