package repository

import (
	"database/sql"
	"errors"
	"time"

	"github.com/Nikhil9989/psb/backend/pkg/models"
)

// UserRepository handles database operations for users
type UserRepository struct {
	db *sql.DB
}

// NewUserRepository creates a new UserRepository
func NewUserRepository(db *sql.DB) *UserRepository {
	return &UserRepository{db: db}
}

// CreateUser inserts a new user into the database
func (r *UserRepository) CreateUser(user *models.User) error {
	query := `
		INSERT INTO users (id, email, password, first_name, last_name, role, is_verified, phone_number, created_at, updated_at)
		VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
	`

	_, err := r.db.Exec(
		query,
		user.ID,
		user.Email,
		user.Password,
		user.FirstName,
		user.LastName,
		user.Role,
		user.IsVerified,
		user.PhoneNumber,
		user.CreatedAt,
		user.UpdatedAt,
	)

	return err
}

// GetUsers retrieves users with pagination
func (r *UserRepository) GetUsers(page, pageSize int) ([]*models.User, error) {
	offset := (page - 1) * pageSize

	query := `
		SELECT id, email, password, first_name, last_name, role, is_verified, phone_number, created_at, updated_at
		FROM users
		ORDER BY created_at DESC
		LIMIT $1 OFFSET $2
	`

	rows, err := r.db.Query(query, pageSize, offset)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	users := []*models.User{}
	for rows.Next() {
		user := &models.User{}
		err := rows.Scan(
			&user.ID,
			&user.Email,
			&user.Password,
			&user.FirstName,
			&user.LastName,
			&user.Role,
			&user.IsVerified,
			&user.PhoneNumber,
			&user.CreatedAt,
			&user.UpdatedAt,
		)
		if err != nil {
			return nil, err
		}
		users = append(users, user)
	}

	if err = rows.Err(); err != nil {
		return nil, err
	}

	return users, nil
}

// GetUserByID retrieves a user by ID
func (r *UserRepository) GetUserByID(id string) (*models.User, error) {
	query := `
		SELECT id, email, password, first_name, last_name, role, is_verified, phone_number, created_at, updated_at
		FROM users
		WHERE id = $1
	`

	user := &models.User{}
	err := r.db.QueryRow(query, id).Scan(
		&user.ID,
		&user.Email,
		&user.Password,
		&user.FirstName,
		&user.LastName,
		&user.Role,
		&user.IsVerified,
		&user.PhoneNumber,
		&user.CreatedAt,
		&user.UpdatedAt,
	)

	if err != nil {
		if err == sql.ErrNoRows {
			return nil, errors.New("user not found")
		}
		return nil, err
	}

	return user, nil
}

// GetUserByEmail retrieves a user by email
func (r *UserRepository) GetUserByEmail(email string) (*models.User, error) {
	query := `
		SELECT id, email, password, first_name, last_name, role, is_verified, phone_number, created_at, updated_at
		FROM users
		WHERE email = $1
	`

	user := &models.User{}
	err := r.db.QueryRow(query, email).Scan(
		&user.ID,
		&user.Email,
		&user.Password,
		&user.FirstName,
		&user.LastName,
		&user.Role,
		&user.IsVerified,
		&user.PhoneNumber,
		&user.CreatedAt,
		&user.UpdatedAt,
	)

	if err != nil {
		if err == sql.ErrNoRows {
			return nil, errors.New("user not found")
		}
		return nil, err
	}

	return user, nil
}

// UpdateUser updates user information
func (r *UserRepository) UpdateUser(user *models.User) error {
	query := `
		UPDATE users
		SET 
			first_name = $1, 
			last_name = $2, 
			phone_number = $3, 
			updated_at = $4
		WHERE id = $5
	`

	_, err := r.db.Exec(
		query,
		user.FirstName,
		user.LastName,
		user.PhoneNumber,
		time.Now(),
		user.ID,
	)

	return err
}

// DeleteUser deletes a user by ID
func (r *UserRepository) DeleteUser(id string) error {
	query := `DELETE FROM users WHERE id = $1`
	_, err := r.db.Exec(query, id)
	return err
}

// GetUserProfile retrieves a user's profile
func (r *UserRepository) GetUserProfile(userID string) (*models.UserProfile, error) {
	query := `
		SELECT user_id, bio, profile_image_url, title, location, social_links, skills, interests, created_at, updated_at
		FROM user_profiles
		WHERE user_id = $1
	`

	profile := &models.UserProfile{}
	err := r.db.QueryRow(query, userID).Scan(
		&profile.UserID,
		&profile.Bio,
		&profile.ProfileImageURL,
		&profile.Title,
		&profile.Location,
		&profile.SocialLinks,
		&profile.Skills,
		&profile.Interests,
		&profile.CreatedAt,
		&profile.UpdatedAt,
	)

	if err != nil {
		if err == sql.ErrNoRows {
			return nil, errors.New("profile not found")
		}
		return nil, err
	}

	return profile, nil
}

// UpdateUserProfile updates or creates a user's profile
func (r *UserRepository) UpdateUserProfile(profile *models.UserProfile) error {
	// Check if profile exists
	_, err := r.GetUserProfile(profile.UserID)
	
	if err != nil && err.Error() == "profile not found" {
		// Create new profile
		query := `
			INSERT INTO user_profiles (user_id, bio, profile_image_url, title, location, social_links, skills, interests, created_at, updated_at)
			VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
		`
		_, err := r.db.Exec(
			query,
			profile.UserID,
			profile.Bio,
			profile.ProfileImageURL,
			profile.Title,
			profile.Location,
			profile.SocialLinks,
			profile.Skills,
			profile.Interests,
			profile.CreatedAt,
			profile.UpdatedAt,
		)
		return err
	}

	if err != nil {
		return err
	}

	// Update existing profile
	query := `
		UPDATE user_profiles
		SET 
			bio = $1, 
			profile_image_url = $2, 
			title = $3, 
			location = $4, 
			social_links = $5, 
			skills = $6, 
			interests = $7, 
			updated_at = $8
		WHERE user_id = $9
	`

	_, err = r.db.Exec(
		query,
		profile.Bio,
		profile.ProfileImageURL,
		profile.Title,
		profile.Location,
		profile.SocialLinks,
		profile.Skills,
		profile.Interests,
		profile.UpdatedAt,
		profile.UserID,
	)

	return err
}

// GetUserPreferences retrieves a user's preferences
func (r *UserRepository) GetUserPreferences(userID string) (*models.UserPreference, error) {
	query := `
		SELECT user_id, email_notifications, sms_notifications, push_notifications, language, theme, timezone, created_at, updated_at
		FROM user_preferences
		WHERE user_id = $1
	`

	prefs := &models.UserPreference{}
	err := r.db.QueryRow(query, userID).Scan(
		&prefs.UserID,
		&prefs.EmailNotifications,
		&prefs.SMSNotifications,
		&prefs.PushNotifications,
		&prefs.Language,
		&prefs.Theme,
		&prefs.Timezone,
		&prefs.CreatedAt,
		&prefs.UpdatedAt,
	)

	if err != nil {
		if err == sql.ErrNoRows {
			return nil, errors.New("preferences not found")
		}
		return nil, err
	}

	return prefs, nil
}

// UpdateUserPreferences updates or creates a user's preferences
func (r *UserRepository) UpdateUserPreferences(prefs *models.UserPreference) error {
	// Check if preferences exist
	_, err := r.GetUserPreferences(prefs.UserID)
	
	if err != nil && err.Error() == "preferences not found" {
		// Create new preferences
		query := `
			INSERT INTO user_preferences (user_id, email_notifications, sms_notifications, push_notifications, language, theme, timezone, created_at, updated_at)
			VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
		`
		_, err := r.db.Exec(
			query,
			prefs.UserID,
			prefs.EmailNotifications,
			prefs.SMSNotifications,
			prefs.PushNotifications,
			prefs.Language,
			prefs.Theme,
			prefs.Timezone,
			prefs.CreatedAt,
			prefs.UpdatedAt,
		)
		return err
	}

	if err != nil {
		return err
	}

	// Update existing preferences
	query := `
		UPDATE user_preferences
		SET 
			email_notifications = $1, 
			sms_notifications = $2, 
			push_notifications = $3, 
			language = $4, 
			theme = $5, 
			timezone = $6, 
			updated_at = $7
		WHERE user_id = $8
	`

	_, err = r.db.Exec(
		query,
		prefs.EmailNotifications,
		prefs.SMSNotifications,
		prefs.PushNotifications,
		prefs.Language,
		prefs.Theme,
		prefs.Timezone,
		prefs.UpdatedAt,
		prefs.UserID,
	)

	return err
}
